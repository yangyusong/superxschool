'use strict'

var xSchoolItem = function(text){
    if(text){
        var obj = JSON.parse(text);
        this.price = obj.price;
        this.course = obj.course;
        this.author = obj.author;
    }
};

xSchoolItem.prototype = {
    toString : function(){
        return JSON.stringify(this)
    }
};

var TheSchool = function () {
    LocalContractStorage.defineMapProperty(this, "data", {
        parse: function (text) {
            return new xSchoolItem(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

TheSchool.prototype ={
    init:function(){
        
    },

    save:function(price,course){
        if(!price || !course){
            throw new Error("empty title or course")
        }

        var from = Blockchain.transaction.from;
        var schoolItem = this.data.get(price);
        if(schoolItem){
            throw new Error("letter has been occupied");
        }

        schoolItem = new xSchoolItem();
        schoolItem.author = from;
        schoolItem.price = price;
        schoolItem.course = course;

        this.data.put(course,schoolItem);
    },

    getMe: function(){
        return Blockchain.transaction.from;
    },

    get:function(course){
        if(!course){
            throw new Error("empty course")
        }
        return this.data.get(course);
    }
}

module.exports = TheSchool;