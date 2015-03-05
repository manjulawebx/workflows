$ = require 'jquery'
do fill = (item = 'The best service provider for your website') ->
    $('.tagline').append "#{item}"
fill