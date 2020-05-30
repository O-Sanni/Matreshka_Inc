package com.example.bookstoredatabase.controller;

import com.example.bookstoredatabase.exceptions.ResourcesNotFoundException;
import com.example.bookstoredatabase.model.Requests;
import com.example.bookstoredatabase.repository.RequestsRepository;
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

public class RequestsController  {
    @Autowired
    private RequestsRepository requestsRepository;


//  get all requests


    @GetMapping("/requests")
    public List<Requests> getAllRequests(Model model) {

        return this.requestsRepository.findAll();

    }

//  get request by id

    @GetMapping("/requests/{id}")
    public ResponseEntity<Requests> requestsById(@PathVariable(value = "id") Long requestId)
            throws ResourcesNotFoundException {
        Requests requests = requestsRepository.findById(requestId)
                .orElseThrow(() -> new ResourcesNotFoundException("User's recipe not found for this id :: " + requestId));
        return ResponseEntity.ok().body(requests);
    }


//  save request

    @PostMapping("/requests")
    public Requests createRequests(@Valid @RequestBody Requests requests) {
        return requestsRepository.save(requests);
    }

//  Update request

    @PutMapping("/requests/{id}")
    public ResponseEntity<Requests> updateRequest(@PathVariable(value = "id") Long requestId, @Valid @RequestBody Requests requestsDetails)
            throws ResourcesNotFoundException {
        Requests requests = requestsRepository.findById(requestId)
                .orElseThrow(()-> new ResourcesNotFoundException("User Receipt not found for this id :: " + requestId));

        requests.setRequesterName(requests.getRequesterName());
        requests.setRequesterEmail(requests.getRequesterEmail());
        requests.setRequesterPhoneNumber(requests.getRequesterPhoneNumber());
        requests.setItemName(requests.getItemName());
        requests.setEnglishItemName(requests.getEnglishItemName());
        requests.setRequestDate(requests.getRequestDate());
        requests.setDateCompleted(requests.getDateCompleted());

        final Requests updatedRequests = requestsRepository.save(requests);


        return ResponseEntity.ok(updatedRequests);

    }

//  Delete request

    @DeleteMapping("/requests/{id}")
    public Map<String, Boolean> deleteRequest(@PathVariable(value = "id") Long requestId)
            throws ResourcesNotFoundException {
        Requests request = requestsRepository.findById(requestId)
                .orElseThrow(()-> new ResourcesNotFoundException("Recipe not found for this id :: " + requestId));

        requestsRepository.delete(request);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted user", Boolean.TRUE);

        return response;

    }
}