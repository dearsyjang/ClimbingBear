package com.example.climbingBear.domain.mntn.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feature_seq")
    private Long fetureSeq;

    @ManyToOne
    private Mountain mntn;

    @Column(name = "PMNTN_LT")
    private Float pmntnLt;

    @Column(name = "PMNTN_UPPL")
    private Integer pmntnUppl;

    @Column(name = "PMNTN_GODN")
    private Integer pmntnGodn;

    @Column(name = "PMNTN_DFFL")
    private String pmtnDffl;
}
