package com.example.bookstoredatabase.controller;

import com.example.bookstoredatabase.exceptions.ResourcesNotFoundException;
import com.example.bookstoredatabase.model.Books;
import com.example.bookstoredatabase.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/book_store/v1")

public class BooksController  {

    @Autowired
    private BooksRepository booksRepository;


//  get all books


    @GetMapping("/books")
    public List<Books> getAllBooks(Model model) {

        return this.booksRepository.findAll();

    }

//  get book by id

    @GetMapping("/books/{id}")
    public ResponseEntity<Books> booksById(@PathVariable(value = "id") Long bookId)
            throws ResourcesNotFoundException {
        Books books = booksRepository.findById(bookId)
                .orElseThrow(() -> new ResourcesNotFoundException("User's recipe not found for this id :: " + bookId));
        return ResponseEntity.ok().body(books);
    }


//  save request

    @PostMapping("/books")
    public Books createBooks(@Valid @RequestBody Books books) {
        return booksRepository.save(books);
    }

//  Update books

    @PutMapping("/books/{id}")
    public ResponseEntity<Books> updateBooks(@PathVariable(value = "id") Long bookId, @Valid @RequestBody Books booksDetails)
            throws ResourcesNotFoundException {
        Books books = booksRepository.findById(bookId)
                .orElseThrow(()-> new ResourcesNotFoundException("User Receipt not found for this id :: " + bookId));

        books.setBookName(books.getBookName());
        books.setBookEnglishName(books.getBookEnglishName());
        books.setBookAuthor(books.getBookAuthor());
        books.setBookDescription(books.getBookDescription());
        books.setBookCategory(books.getBookCategory());
        books.setBookPrice(books.getBookPrice());
        books.setBookWebsite(books.getBookWebsite());
        books.setBookPicture(books.getBookPicture());

        final Books updatedBooks = booksRepository.save(books);


        return ResponseEntity.ok(updatedBooks);

    }

//  Delete Books

    @DeleteMapping("/books/{id}")
    public Map<String, Boolean> deleteBooks(@PathVariable(value = "id") Long bookId)
            throws ResourcesNotFoundException {
        Books books = booksRepository.findById(bookId)
                .orElseThrow(()-> new ResourcesNotFoundException("Recipe not found for this id :: " + bookId));

        booksRepository.delete(books);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted user", Boolean.TRUE);

        return response;

    }
}