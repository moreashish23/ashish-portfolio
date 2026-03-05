package com.ashish.portfolio.dto;

import lombok.Data;

@Data
public class ProjectRequest {

    private String title;
    private String description;
    private String techStack;
    private String githubLink;
    private String liveLink;
    private String imageUrl;
}