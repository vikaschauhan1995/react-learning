const headerStyle= {
    color: '#f59542'
  }
const headerStyle2= {
    backgroundColor: 'blue',
}

const mergedStyle = {
    ...headerStyle,
    ...headerStyle2
};

const m = Object.assign(headerStyle, headerStyle2)
console.log(m);


const div = createElement('div');
div.style('color', '#fff')
div.style('background-color', 'blue');