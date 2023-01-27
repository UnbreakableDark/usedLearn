export  class GuiYuan{
    constructor(uid:string,psd:number){
        this.uid=uid;
        this.password=psd;
    }
    uid:string;
    password:number;
    login(){
        alert(`欢迎 登录 柜员 ${this.uid}`);
    }
}

export class DiGui extends GuiYuan{
    constructor(uid:string,psd:number,bosid:string){
        super(uid,psd);
        this.bosid=bosid;

    }
    bosid:string;
}

export let zy=new GuiYuan("060005zyy",123654);
zy.login();