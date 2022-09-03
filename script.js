const loadNewsCatagory = async() =>{
    const url= `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCatagory(data.data.news_category);

}
const displayNewsCatagory = (news_category) =>{
    const allNewsCatagoryDiv = document.getElementById('news-div');
    let count = 0;
    news_category.forEach(soloNews => {
        console.log(soloNews)
        count = count+1;
        const soloCatagory = document.createElement('button');
        soloCatagory.classList.add('btn');
        soloCatagory.setAttribute('onclick',`loadNews(${soloNews.category_id},'${soloNews.category_name}')`);
        soloCatagory.setAttribute('id',`newsType-${count}`);

        
        soloCatagory.innerHTML =`
        ${soloNews.category_name}
        `;
        allNewsCatagoryDiv.appendChild(soloCatagory);
    });
}
loadNewsCatagory();

const loadNews = async(category_id,category_name) =>{
    toggleSpinner(true);
    console.log(category_id);
    const url=  `https://openapi.programming-hero.com/api/news/category/${'0'+category_id}` 
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
    const showNews = document.getElementById('input-feild');
    const showNewsValue = `${data.data.length} items found for this category ${category_name}` ;
    showNews.value = showNewsValue;
}