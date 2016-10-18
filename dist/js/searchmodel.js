/*
    实体楼盘,每个商圈做2个实体楼盘数据
*/
var BuildingModel = [
    {
        code: "青岛",                               // 编码
        name: "华润大厦",                           // 楼盘名称
        region: "市南区",                             // 行政区
        businesscircle: "香港中路",                    // 商圈
        decoration: "豪装",                              // 装修水平
        areaMin: 120,                               // 资源最小面积
        areaMax: 230,                               // 资源最大面积
        dayBeginning: 15,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 10,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 123,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.071691,                       // 楼盘经度
        latitude: 120.384446,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",                               // 编码
        name: "发展大厦",                           // 楼盘名称
        region: "市南区",                             // 行政区
        businesscircle: "火车站",                    // 商圈
        decoration: "精装",                              // 装修水平
        areaMin: 210,                               // 资源最小面积
        areaMax: 490,                               // 资源最大面积
        dayBeginning: 16,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 11,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 124,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.070017,                       // 楼盘经度
        latitude: 120.325261,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",                               // 编码
        name: "兴源大厦",                           // 楼盘名称
        region: "市南区",                             // 行政区
        businesscircle: "奥帆中心",                    // 商圈
        decoration: "简装",                              // 装修水平
        areaMin: 220,                               // 资源最小面积
        areaMax: 480,                               // 资源最大面积
        dayBeginning: 17,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 13,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 125,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.066341,                       // 楼盘经度
        latitude: 120.404779,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",                               // 编码
        name: "商会大厦",                           // 楼盘名称
        region: "市北区",                             // 行政区
        businesscircle: "台东",                    // 商圈
        decoration: "毛坯",                              // 装修水平
        areaMin: 190,                               // 资源最小面积
        areaMax: 320,                               // 资源最大面积
        dayBeginning: 17,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 14,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 125,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.087927,                       // 楼盘经度
        latitude: 120.363421,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]

    },
    {
        code: "青岛",                               // 编码
        name: "裕龙国际中心",                           // 楼盘名称
        region: "崂山区",                             // 行政区
        businesscircle: "颐中体育场",                    // 商圈
        decoration: "简装",                              // 装修水平
        areaMin: 184,                               // 资源最小面积
        areaMax: 210,                               // 资源最大面积
        dayBeginning: 18,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 15,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 126,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.113021,                       // 楼盘经度
        latitude: 120.459827,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",                               // 编码
        name: "南华智慧大厦",                           // 楼盘名称
        region: "崂山区",                             // 行政区
        businesscircle: "北村",                    // 商圈
        decoration: "精装",                              // 装修水平
        areaMin: 192,                               // 资源最小面积
        areaMax: 412,                               // 资源最大面积
        dayBeginning: 19,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 16,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 127,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.114573,                       // 楼盘经度
        latitude: 120.441646,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",                               // 编码
        name: "百通大厦",                           // 楼盘名称
        region: "李沧区",                             // 行政区
        businesscircle: "李村公园",                    // 商圈
        decoration: "豪装",                              // 装修水平
        areaMin: 330,                               // 资源最小面积
        areaMax: 516,                               // 资源最大面积
        dayBeginning: 20,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 17,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 128,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.166695,                       // 楼盘经度
        latitude: 120.42915,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]
    },
]
