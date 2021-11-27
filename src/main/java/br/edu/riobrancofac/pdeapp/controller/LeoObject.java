package br.edu.riobrancofac.pdeapp.controller;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LeoObject {

    @JsonProperty("initialized")
    private boolean initialized;
    @JsonProperty("sealed")
    private boolean sealed;
    @JsonProperty("standby")
    private boolean standby;
    @JsonProperty("performance_standby")
    private boolean performanceStandby;
    @JsonProperty("replication_performance_mode")
    private String replicationPerformanceMode;
    @JsonProperty("replication_dr_mode")
    private String replicationDrMode;
    @JsonProperty("server_time_utc")
    private int serverTimeUtc;
    @JsonProperty("version")
    private String version;
    @JsonProperty("cluster_name")
    private String clusterName;
    @JsonProperty("cluster_id")
    private String clusterId;

    public LeoObject() {
        this.initialized = true;
        this.sealed = false;
        this.standby = false;
        this.performanceStandby = false;
        this.replicationPerformanceMode = "disabled";
        this.replicationDrMode = "disabled";
        this.serverTimeUtc = 1637936936;
        this.version = "1.5.4";
        this.clusterName = "vault";
        this.clusterId = "b39cff3a-d4cb-e253-f4cd-63fc2883b41b";

    }
}
