package com.example.climbingBear.domain.mntn.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "mountain_place")
public class MountainPlace {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "place_seq")
    private Long placeSeq;

    @ManyToOne
    private Mountain mntn;

    @Column(name = "place_nm")
    private String placeNm;

    @Column(name = "place_content", length = 3000)
    private String placeContent;
}
