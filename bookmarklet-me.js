javascript: function Gosling(i, g) {
    this.ratio = i, this.imageurl = g
}

function Randomize(i) {
    return Math.floor(Math.random() * i.length)
}

function imageRatio(i) {
    var g = i.height / i.width;
    return g > 1 ? "vertical" : 1 === g ? "square" : 1 > g ? "horizontal" : void 0
}
var getGosling = {
        init: function(i) {
            this.myGosling = i
        },
        horizontal: function() {
            return this.myGosling.filter(function(i) {
                return "horizontal" === i.ratio
            })
        },
        vertical: function() {
            return this.myGosling.filter(function(i) {
                return "vertical" === i.ratio
            })
        },
        square: function() {
            return this.myGosling.filter(function(i) {
                return "square" === i.ratio
            })
        }
    },
    myGosling = [
    new Gosling("horizontal", "https://tomlim2.github.io/heygirl/sunset/horizontal1.jpg"),
    new Gosling("horizontal", "https://tomlim2.github.io/heygirl/sunset/horizontal2.jpeg"),

    new Gosling("vertical", "https://tomlim2.github.io/heygirl/sunset/vertical1.jpg"),
    new Gosling("vertical", "https://tomlim2.github.io/heygirl/sunset/vertical2.jpg"),

    new Gosling("square", "https://tomlim2.github.io/heygirl/sunset/sqaure1.jpg")];
    new Gosling("square", "https://tomlim2.github.io/heygirl/sunset/sqaure2.jpg")];
    

! function(i) {
    getGosling.init(myGosling);
    for (var g = i.getElementsByTagName("img"), o = g.length, n = 0; o > n; n++) {
        var l = imageRatio(g[n]),
            t = Randomize(getGosling[l]()),
            e = getGosling[l]()[t];
        g[n].src = e.imageurl
    }
}(document);
