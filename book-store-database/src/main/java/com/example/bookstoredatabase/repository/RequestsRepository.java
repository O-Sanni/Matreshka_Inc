package com.example.bookstoredatabase.repository;

import com.example.bookstoredatabase.model.Requests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestsRepository extends JpaRepository<Requests, Long> {
}
