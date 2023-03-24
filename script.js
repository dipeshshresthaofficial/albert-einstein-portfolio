
function toggleMenus(){
    const navMenus = document.querySelector('#nav-menus');
    if(window.getComputedStyle(navMenus).display === 'none'){
        navMenus.style.display = 'block';
        document.querySelector('#nav').style.display='block'
    }else{
        navMenus.style.display = 'none';
    }
}
var JSONstr;
fetch('https://upadhayay.github.io/db.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
      for(let paper in data.books){
        const articleRef = document.createElement('article');
        articleRef.classList.add('research-box');
        articleRef.setAttribute('id','paper-'+paper);
        document.getElementById('research-cont').appendChild(articleRef);

        const imgRef = document.createElement('img');
        imgRef.setAttribute('src','./images/paper_img'+paper+'.png');
        document.getElementById('paper-'+paper).appendChild(imgRef);

        const descDivRef = document.createElement('div');
        descDivRef.classList.add('research-desc');
        descDivRef.setAttribute('id','paper-'+paper+'-desc')
        document.getElementById('paper-'+paper).appendChild(descDivRef);

        const researchDescRef = document.getElementById('paper-'+paper+'-desc');
        const paperYearSpanRef = document.createElement('span');
        paperYearSpanRef.innerHTML = data.books[paper].year;
        researchDescRef.appendChild(paperYearSpanRef);

        const paperTitleParaRef = document.createElement('p');       
        paperTitleParaRef.innerHTML = data.books[paper].title;
        researchDescRef.appendChild(paperTitleParaRef);


        const paperReadMoreBtnRef = document.createElement('button');
        paperReadMoreBtnRef.setAttribute('id','paper-'+paper+'-btn');
        paperReadMoreBtnRef.classList.add('hyperlink-btn');
        researchDescRef.appendChild(paperReadMoreBtnRef);

        const readMoreLinkRef = document.createElement('a');
        readMoreLinkRef.setAttribute('href','#');
        readMoreLinkRef.innerHTML = 'Read More';
        document.getElementById('paper-'+paper+'-btn').appendChild(readMoreLinkRef);

        
        // const paperYearSpanRef
        
      }
      });
    
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

