package com.example.learnerhub.repository;

import com.example.learnerhub.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByTitleContaining(String title);
}