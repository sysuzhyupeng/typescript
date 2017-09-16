var Tab = (function () {
    function Tab(option) {
        this.tabBtn = this.getDom(option.tabBtn);
        this.tabContent = this.getDom(option.tabCon);
        if (!this.tabBtn || !this.tabContent)
            return;
        this.selectedClassName = option.selected;
        this.eventType = option.type || 'click';
        this.tabLen = this.tabBtn.length;
        this.init();
    }
    Tab.prototype.getDom = function (domStr) {
        var nodeName = domStr.split(' '), container = this.getById(nodeName[0].trim().slice(1)), list = this.getByClassName(nodeName[1].trim().slice(1), container);
        if (!container || list.length === 0)
            return null;
        return list;
    };
    Tab.prototype.getById = function (id) {
        return document.getElementById(id);
    };
    Tab.prototype.getByClassName = function (className, parent) {
        var elem = [], node = parent.nodeType === 1 ? parent.getElementsByTagName('*') : document.getElementsByTagName('*'), rxp = new RegExp("(^|\\s)" + className + "(\\s|$)");
        for (var i = 0, len = node.length; i < len; i++) {
            if (rxp.test(node[i].className)) {
                elem.push(node[i]);
            }
        }
        return elem;
    };
    Tab.prototype["switch"] = function (index) {
        var className = new RegExp(this.selectedClassName, 'g');
        for (var i = 0; i < this.tabLen; i++) {
            this.tabContent[i].style.display = 'none';
            this.tabBtn[i].className = this.tabBtn[i].className.replace(className, '').trim();
        }
        this.tabBtn[index].className += ' ' + this.selectedClassName;
        this.tabContent[index].style.display = 'block';
    };
    Tab.prototype.bindEvent = function () {
        var that = this;
        var _loop_1 = function (i) {
            this_1.tabBtn[i]['on' + this_1.eventType] = function () {
                that["switch"](i + '');
            };
        };
        var this_1 = this;
        for (var i = 0; i < this.tabLen; i++) {
            _loop_1(i);
        }
    };
    Tab.prototype.init = function () {
        this.tabBtn[0].className += ' ' + this.selectedClassName;
        this.tabContent[0].style.display = 'block';
        this.bindEvent();
    };
    return Tab;
}());
