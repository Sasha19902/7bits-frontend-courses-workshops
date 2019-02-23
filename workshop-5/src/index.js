import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';
import spinnerTemplate from './components/spinner/spinner.hbs';

var urls = [
  'data1.json',
  'data2.json',
  'data3.json',
  'data4.json',
];



document.addEventListener("DOMContentLoaded", function() {
  const root = $('#root');
  root.append(indexTemplate());
  const content = $('.content');

    Promise.all(urls.map(url => fetch(`api/${url}`).then(elem => elem.json()).catch(function (message) {
        console.log(message);
    })))
        .then(response => response.forEach(
            element => {
                if(element !== undefined)
                    element.data.forEach(
                        toPrint => content.append(articleTemplate(toPrint)))
            }
        ));


});
