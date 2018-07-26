package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ha.healthauditlog.model.Comment;

public interface CommentRepository extends JpaRepository<Comment,Long>{

}
