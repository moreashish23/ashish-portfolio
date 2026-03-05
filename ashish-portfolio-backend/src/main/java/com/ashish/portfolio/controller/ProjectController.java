package com.ashish.portfolio.controller;

import com.ashish.portfolio.dto.ProjectRequest;
import com.ashish.portfolio.dto.ProjectResponse;
import com.ashish.portfolio.service.ImageUploadService;
import com.ashish.portfolio.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProjectController {

    private final ImageUploadService imageUploadService;
    private final ProjectService projectService;

    // PUBLIC
    @GetMapping("/projects")
    public List<ProjectResponse> getAll() {
        return projectService.getAll();
    }

    @GetMapping("/projects/{id}")
    public ProjectResponse getById(@PathVariable Long id) {
        return projectService.getById(id);
    }

    // ADMIN
    @PostMapping(value = "/admin/projects", consumes = "multipart/form-data")
    public ProjectResponse create(
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam String techStack,
            @RequestParam String githubLink,
            @RequestParam String liveLink,
            @RequestParam MultipartFile image
    ) {

        String imageUrl = imageUploadService.uploadImage(image);

        ProjectRequest request = new ProjectRequest();
        request.setTitle(title);
        request.setDescription(description);
        request.setTechStack(techStack);
        request.setGithubLink(githubLink);
        request.setLiveLink(liveLink);
        request.setImageUrl(imageUrl);

        return projectService.create(request);
    }

    @PutMapping(value = "/admin/projects/{id}", consumes = "multipart/form-data")
    public ProjectResponse update(
            @PathVariable Long id,
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam String techStack,
            @RequestParam String githubLink,
            @RequestParam String liveLink,
            @RequestParam(required = false) MultipartFile image
    ) {

        String imageUrl = null;

        if (image != null && !image.isEmpty()) {
            imageUrl = imageUploadService.uploadImage(image);
        }

        return projectService.updateWithImage(id, title, description, techStack, githubLink, liveLink, imageUrl);
    }

    @DeleteMapping("/admin/projects/{id}")
    public void delete(@PathVariable Long id) {
        projectService.delete(id);
    }
}