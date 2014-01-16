'use strict';
var HumanView = require('human-view');
var templates = require('../templates');

module.exports = HumanView.extend({
    template: templates.includes.movie,
    textBindings: {
            year: '.year'
        ,   title: '.title'
        ,   originaltitle: '.originaltitle'
        ,   tagline: '.tagline'
        ,   director: '.director'
        ,   basepath: '.basepath'
        ,   country: '.country'
        ,   idImdb: '.hrefImdb'
        },
        srcBindings: {
            'firstThumb': '.firstThumb'
        },
        hrefBindings: {
            'fullImage': '.fullImage',
            'hrefImdb': '.hrefImdb'
        },
        render: function () {
            this.renderAndBind();
        },
        handleRemoveClick: function () {
            this.model.destroy();
        },
        processKeys: function (event) {
            console.log(event);
        }
    }
);
