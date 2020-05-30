package com.example.bookstoredatabase.controller;

import com.example.bookstoredatabase.exceptions.ResourcesNotFoundException;
import com.example.bookstoredatabase.model.Subscribe;
import com.example.bookstoredatabase.repository.SubscribeRepository;
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

public class SubscribeController {


    @Autowired
    private SubscribeRepository subscribeRepository;


//  get all subscribe


    @GetMapping("/subscribe")
    public List<Subscribe> getAllSubscribe(Model model) {

        return this.subscribeRepository.findAll();

    }

//  get subscribtion by id

    @GetMapping("/subscribe/{id}")
    public ResponseEntity<Subscribe> getSubscribeById(@PathVariable(value = "id") Long subscriptionId)
            throws ResourcesNotFoundException {
        Subscribe subscribe = subscribeRepository.findById(subscriptionId)
                .orElseThrow(() -> new ResourcesNotFoundException("Subscription not found for this id :: " + subscriptionId));
        return ResponseEntity.ok().body(subscribe);
    }


//  save subscription

    @PostMapping("/subscribe")
    public Subscribe createsubscription(@Valid @RequestBody Subscribe subscribe) {
        return subscribeRepository.save(subscribe);
    }

//  Update subscription

    @PutMapping("/subscribe/{id}")
    public ResponseEntity<Subscribe> updateSubscription(@PathVariable(value = "id") Long subscriptionId, @Valid @RequestBody Subscribe subscribeDetails)
            throws ResourcesNotFoundException {
        Subscribe subscribe = subscribeRepository.findById(subscriptionId)
                .orElseThrow(() -> new ResourcesNotFoundException("Subscription not found for this id :: " + subscriptionId));


        subscribe.setEmail(subscribeDetails.getEmail());
        subscribe.setFullName(subscribeDetails.getFullName());
        subscribe.setAge(subscribeDetails.getAge());


        final Subscribe updatedSubscription = subscribeRepository.save(subscribe);


        return ResponseEntity.ok(updatedSubscription);

    }

//  Delete Subscription

    @DeleteMapping("/subscribe/{id}")
    public Map<String, Boolean> deleteSubscription(@PathVariable(value = "id") Long subscriptionId)
            throws ResourcesNotFoundException {
        Subscribe subscribe = subscribeRepository.findById(subscriptionId)
                .orElseThrow(() -> new ResourcesNotFoundException("Employee not found for this id :: " + subscriptionId));

        subscribeRepository.delete(subscribe);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted subscription", Boolean.TRUE);

        return response;

    }
}


