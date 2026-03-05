package com.ashish.portfolio.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ProjectResponse {

    private Long id;
    private String title;
    private String description;
    private String techStack;
    private String githubLink;
    private String liveLink;
    private String imageUrl;
    private LocalDateTime createdAt;
}