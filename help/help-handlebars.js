const  Handlebars = require('handlebars');
module.exports = {
        sum: (a,b) => a+b,
        sortable: (field,sort) =>{
            var sortType = field === sort.column ? sort.type : 'default'; 
            const items = {
                default: 'bar-chart-2',
                asc: 'arrow-up-circle',
                desc: 'arrow-down-circle',
            }
            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc',
            }
            const item = items[sortType]
            const type = types[sortType]
            const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
            const output =`<a href="${href}"><i data-feather="${item}"></i></a>`;
            return new Handlebars.SafeString(output);
        }
    }

