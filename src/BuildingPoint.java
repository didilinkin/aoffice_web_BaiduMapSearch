package com.aoffice.web.map.model;

import com.aoffice.web.common.util.StrUtil;

/**
 * 楼盘点实体类
 *
 * Created by JJJ on 2016/9/26.
 */
public class BuildingPoint {
    /** 编码 */
    private String code;
    /** 名称 */
    private String name;
    /** 价格按天起点 */
    private Double dayBeginning;
    /** 价格按月起点 */
    private Double monthBeginning;
    /** 价格起点 */
    private String priceBeginning;
    /** 价格起点单位 */
    private String beginningUnit;
    /** 资源数量 */
    private Integer resourceAmount;
    /** 图片 */
    private String picUrl;
    /** 地理经度 */
    private Double longitude;
    /** 地理纬度 */
    private Double latitude;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getDayBeginning() {
        return dayBeginning;
    }

    public void setDayBeginning(Double dayBeginning) {
        this.dayBeginning = dayBeginning;
    }

    public Double getMonthBeginning() {
        return monthBeginning;
    }

    public void setMonthBeginning(Double monthBeginning) {
        this.monthBeginning = monthBeginning;
    }

    public String getPriceBeginning() {
        if (null != dayBeginning) {
            priceBeginning = StrUtil.subZeroAndDot("¥" + dayBeginning);
        } else {
            priceBeginning = "¥" + monthBeginning;
        }
        return priceBeginning;
    }

    public void setPriceBeginning(String priceBeginning) {
        this.priceBeginning = priceBeginning;
    }

    public String getBeginningUnit() {
        if (null != dayBeginning) {
            beginningUnit = "元/m2/天起";
        } else {
            beginningUnit = "元/月起";
        }
        return beginningUnit;
    }

    public void setBeginningUnit(String beginningUnit) {
        this.beginningUnit = beginningUnit;
    }

    public Integer getResourceAmount() {
        return resourceAmount;
    }

    public void setResourceAmount(Integer resourceAmount) {
        this.resourceAmount = resourceAmount;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }
}