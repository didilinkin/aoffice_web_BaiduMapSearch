package com.aoffice.web.map.model;

/**
 * 地区点实体类
 *
 * Created by JJJ on 2016/9/26.
 */
public class RegionPoint {
    /** 编码 */
    private String code;
    /** 名称 */
    private String name;
    /** 资源数量 */
    private Integer resourceAmount;
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

    public Integer getResourceAmount() {
        return resourceAmount;
    }

    public void setResourceAmount(Integer resourceAmount) {
        this.resourceAmount = resourceAmount;
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