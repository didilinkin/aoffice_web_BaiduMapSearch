package com.aoffice.web.building.model;

/**
 * 查询模型实体类
 *
 * Created by JJJ on 2016/8/11.
 */
public class SearchModel {
    /** 快捷链接类型（A：商圈；B：团队规模；C：办公类型） */
    private String quickType;
    /** 区域所属城市编码 */
    private String cityCode;
    /** 楼盘所属区域编码 */
    private String regionCode;
    /** 楼盘所属商圈编码 */
    private String businessCircleCode;
    /** 楼盘编码 */
    private String buildingCode;
    /** 楼盘名称 */
    private String name;
    /** 楼盘关注度 */
    private  Integer attention;
    /** 楼盘推荐（'0'：标准；'1'：推荐） */
    private String recommendation;
    /** 资源类型（A：户型；B：工位） */
    private String type;
    /** 资源装修（A：豪装；B：精装；C：简装；D：毛坯） */
    private String decoration;
    /** 资源面积最小值 */
    private Integer areaMin;
    /** 资源面积最大值 */
    private Integer areaMax;
    /** 资源价位按天最小值 */
    private Double priceDayMin;
    /** 资源价位按天最大值 */
    private Double priceDayMax;
    /** 中心点纬度 */
    private Double centralLat;
    /** 中心点经度 */
    private Double centralLon;

    public String getCityCode() {
        return cityCode;
    }

    public void setCityCode(String cityCode) {
        this.cityCode = cityCode;
    }

    public String getRegionCode() {
        return regionCode;
    }

    public void setRegionCode(String regionCode) {
        this.regionCode = regionCode;
    }

    public String getBusinessCircleCode() {
        return businessCircleCode;
    }

    public void setBusinessCircleCode(String businessCircleCode) {
        this.businessCircleCode = businessCircleCode;
    }

    public String getBuildingCode() {
        return buildingCode;
    }

    public void setBuildingCode(String buildingCode) {
        this.buildingCode = buildingCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAttention() {
        return attention;
    }

    public void setAttention(Integer attention) {
        this.attention = attention;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDecoration() {
        return decoration;
    }

    public void setDecoration(String decoration) {
        this.decoration = decoration;
    }

    public Integer getAreaMin() {
        return areaMin;
    }

    public void setAreaMin(Integer areaMin) {
        this.areaMin = areaMin;
    }

    public Integer getAreaMax() {
        return areaMax;
    }

    public void setAreaMax(Integer areaMax) {
        this.areaMax = areaMax;
    }

    public Double getPriceDayMin() {
        return priceDayMin;
    }

    public void setPriceDayMin(Double priceDayMin) {
        this.priceDayMin = priceDayMin;
    }

    public Double getPriceDayMax() {
        return priceDayMax;
    }

    public void setPriceDayMax(Double priceDayMax) {
        this.priceDayMax = priceDayMax;
    }

    public String getQuickType() {
        return quickType;
    }

    public void setQuickType(String quickType) {
        this.quickType = quickType;
    }

    public Double getCentralLat() {
        return centralLat;
    }

    public void setCentralLat(Double centralLat) {
        this.centralLat = centralLat;
    }

    public Double getCentralLon() {
        return centralLon;
    }

    public void setCentralLon(Double centralLon) {
        this.centralLon = centralLon;
    }
}
