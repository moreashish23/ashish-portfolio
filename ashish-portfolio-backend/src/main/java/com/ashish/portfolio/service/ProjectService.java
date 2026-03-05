package com.ashish.portfolio.service;

import com.ashish.portfolio.dto.ProjectRequest;
import com.ashish.portfolio.dto.ProjectResponse;
import com.ashish.portfolio.entity.Project;
import com.ashish.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectResponse create(ProjectRequest request) {

        Project project = Project.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .techStack(request.getTechStack())
                .githubLink(request.getGithubLink())
                .liveLink(request.getLiveLink())
                .imageUrl(request.getImageUrl())
                .createdAt(LocalDateTime.now())
                .build();

        Project saved = projectRepository.save(project);

        return mapToResponse(saved);
    }

    public List<ProjectResponse> getAll() {
        return projectRepository.findAll(
                        Sort.by(Sort.Direction.DESC, "createdAt")
                )
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    public ProjectResponse getById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        return mapToResponse(project);
    }

    public void delete(Long id) {
        projectRepository.deleteById(id);
    }

    private ProjectResponse mapToResponse(Project project) {
        return ProjectResponse.builder()
                .id(project.getId())
                .title(project.getTitle())
                .description(project.getDescription())
                .techStack(project.getTechStack())
                .githubLink(project.getGithubLink())
                .liveLink(project.getLiveLink())
                .imageUrl(project.getImageUrl())
                .createdAt(project.getCreatedAt())
                .build();
    }

    public ProjectResponse update(Long id, ProjectRequest request) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechStack(request.getTechStack());
        project.setGithubLink(request.getGithubLink());
        project.setLiveLink(request.getLiveLink());

        Project updated = projectRepository.save(project);

        return mapToResponse(updated);
    }

    public ProjectResponse updateWithImage(
            Long id,
            String title,
            String description,
            String techStack,
            String githubLink,
            String liveLink,
            String imageUrl
    ) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        project.setTitle(title);
        project.setDescription(description);
        project.setTechStack(techStack);
        project.setGithubLink(githubLink);
        project.setLiveLink(liveLink);

        if (imageUrl != null) {
            project.setImageUrl(imageUrl);
        }

        Project updated = projectRepository.save(project);

        return mapToResponse(updated);
    }
}