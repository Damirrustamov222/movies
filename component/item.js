// item.js

export function Item(item) {
    const li = document.createElement('li');
    const delete_div = document.createElement('div');

    li.className = 'promo__interactive-item';
    delete_div.classList.add('delete');

    li.innerHTML = item.Title;
    li.append(delete_div);




  const  ganre =document.querySelector('.promo__genre')
  const title  = document.querySelector('.promo__title')
  const plot = document.querySelector('.promo__descr')
  const rating = document.querySelector('.promo__ratings')
  const  poster= document.querySelector('.promo__bg')
  rating.style.color = `white`


    li.onclick = () => {
        ganre.innerHTML = item.Genre;
        title.innerHTML = item.Title;
        plot.innerHTML = item.Plot;
        rating.innerHTML = item.Ratings.map(rating => `${rating.Source}: ${rating.Value}`).join('<br>');
        poster.style.backgroundImage = `url('${item.Poster}')`;
    };

    return li;
}
