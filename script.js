const handelCategory = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const tabContainer = document.getElementById("btn-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick="handelLoad('${category.category_id}')" class="btn ">${category.category}</button>
        `;
    tabContainer.appendChild(div);
  });
};
const handelLoad = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = " ";
  data.data.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
    <div
          id="card-container"
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 "
        >
           <div class="card w-[312px] bg-base-100 rounded-none">
            <figure>
              <img class="h-[400px]"
                src="${news.thumbnail}"
              />
            </figure>
            <div class="card-body">
              <div class="flex gap-2 ">
                <div>
                  <img class="w-[50px] h-[50px] rounded-full" src="${news.authors[0].profile_picture}" alt="" />
                </div>
                <div>
                  <h2 class="card-title">
                    ${news.title}
                  </h2>
                  <p class="py-1">${news.authors[0].profile_name}</p>
                  <p>${news.others.views
                  }</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
    `;
    cardContainer.appendChild(div);
  });
};
handelCategory();
handelLoad("1000")
