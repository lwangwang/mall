import { request } from './request'

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: { iid }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.highNowPrice
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}
// constructor 是一种用于创建和初始化class创建的对象的特殊方法。
export class ShopInfo {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fan = shopInfo.cFans
        this.good = shopInfo.cGoods
        this.sell = shopInfo.cSells
        this.score = shopInfo.score
    }
}