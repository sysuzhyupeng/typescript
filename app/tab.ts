//传入配置项的接口
interface Option {
  	tabBtn: string;
  	tabCon: string;
  	selected: string;
  	type ?: string;
}

class Tab {
	//private属性不能在声明它的类的外部访问
	private tabBtn: any;
	private tabContent: any;
	private selectedClassName: string;
	private eventType: string;
	private tabLen: number;
	constructor(option: Option) {
		//切换点击的元素
		this.tabBtn = this.getDom(option.tabBtn);
		//切换的内容
	    this.tabContent = this.getDom(option.tabCon);
	    if(!this.tabBtn || !this.tabContent) return;
	    //选中的类名
	    this.selectedClassName = option.selected; 
	    this.eventType = option.type || 'click';
	    this.tabLen = this.tabBtn.length;
	    //进行初始化
	    this.init();
	}
	public getDom(domStr: string): any {
		let nodeName = domStr.split(' '),
			container = this.getById(nodeName[0].trim().slice(1)),
			list = this.getByClassName(nodeName[1].trim().slice(1), container);
		if(!container || list.length === 0) return null;
        return list;
	}
	public getById(id: string){
		return document.getElementById(id);
	}
	public getByClassName(className: string, parent: any){
		let elem = [],
            node = parent.nodeType === 1 ? parent.getElementsByTagName('*') : document.getElementsByTagName('*'),
            rxp = new RegExp("(^|\\s)" + className + "(\\s|$)");
        for(let i = 0,  len = node.length; i < len; i++){
            if(rxp.test(node[i].className)){
                elem.push(node[i]);
            }
        }
        return elem;
	}
	private switch(index: string): void {
        let className = new RegExp(this.selectedClassName, 'g');
        for(let i = 0; i < this.tabLen; i++){
            this.tabContent[i].style.display = 'none';
            this.tabBtn[i].className = this.tabBtn[i].className.replace(className, '').trim();
        }
        this.tabBtn[index].className += ' ' + this.selectedClassName;
        this.tabContent[index].style.display = 'block';
    }
    private bindEvent():void {
    	let that = this;
    	for(let i = 0; i < this.tabLen; i++){
            this.tabBtn[i]['on' + this.eventType] = function(){
            	that.switch(i + '');
        	}
        }
    }
	public init():void {
        this.tabBtn[0].className += ' '+ this.selectedClassName;
        this.tabContent[0].style.display = 'block';
        this.bindEvent();
	}
}