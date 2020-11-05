package com.example.bookstoredatabase.controller;


import com.example.bookstoredatabase.exceptions.ResourcesNotFoundException;
import com.example.bookstoredatabase.model.Gifts;
import com.example.bookstoredatabase.repository.GiftsRepository;
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

public class GiftsController {

    @Autowired
    private GiftsRepository giftsRepository;


//  get all gifts


    @GetMapping("/gifts")
    public List<Gifts> getAllGifts(Model model) {

        return this.giftsRepository.findAll();

    }

//  get gift by id

    @GetMapping("/gifts/{id}")
    public ResponseEntity<Gifts> giftsById(@PathVariable(value = "id") Long giftsId)
            throws ResourcesNotFoundException {
        Gifts gifts = giftsRepository.findById(giftsId)
                .orElseThrow(() -> new ResourcesNotFoundException("User's gift not found for this id :: " + giftsId));
        return ResponseEntity.ok().body(gifts);
    }


//  save gifts

    @PostMapping("/gifts")
    public Gifts createGifts(@Valid @RequestBody Gifts gifts) {
        return giftsRepository.save(gifts);
    }

//  Update gifts

    @PutMapping("/gifts/{id}")
    public ResponseEntity<Gifts> updateGifts(@PathVariable(value = "id") Long giftsId, @Valid @RequestBody Gifts giftsDetails)
            throws ResourcesNotFoundException {
        Gifts gifts = giftsRepository.findById(giftsId)
                .orElseThrow(() -> new ResourcesNotFoundException("Gift not found for this id :: " + giftsId));

        gifts.setGiftName(giftsDetails.getGiftName());
        gifts.setGiftDescription(giftsDetails.getGiftDescription());
        gifts.setGiftPrice(giftsDetails.getGiftPrice());
        gifts.setGiftWebsite(giftsDetails.getGiftWebsite());
        gifts.setGiftPicture(giftsDetails.getGiftPicture());

        final Gifts updatedGifts = giftsRepository.save(gifts);


        return ResponseEntity.ok(updatedGifts);

    }


//  Delete gifts

    @DeleteMapping("/gifts/{id}")
    public Map<String, Boolean> deleteGifts(@PathVariable(value = "id") Long giftsId)
            throws ResourcesNotFoundException {
        Gifts gifts = giftsRepository.findById(giftsId)
                .orElseThrow(() -> new ResourcesNotFoundException("Gift not found for this id :: " + giftsId));

        giftsRepository.delete(gifts);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted user", Boolean.TRUE);

        return response;

    }
}
