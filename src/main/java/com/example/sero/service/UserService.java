package com.example.sero.service;

import com.example.sero.dto.UserDto;
import com.example.sero.model.User;
import com.example.sero.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder encoder;
    @Autowired
    private UserRepository userRepository;
    @Transactional
    public void userSave(UserDto userDto){
        String rawPassword = userDto.getPassword();
        String encPassword = encoder.encode(rawPassword);

        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setEmail(userDto.getEmail());
        user.setPassword(encPassword);
        user.setRole("ROLE_USER");
        userRepository.save(user);

    }

    @Transactional(readOnly = true)
    public Map<String, String> validateHandling(Errors errors) {
        Map<String, String> validatorResult = new HashMap<>();

        /* 유효성 검사에 실패한 필드 목록을 받음 */
        for (FieldError error : errors.getFieldErrors()) {
            String validKeyName = String.format("valid_%s", error.getField());
            validatorResult.put(validKeyName, error.getDefaultMessage());
        }

        return validatorResult;
    }

    public boolean checkDupEmail(String email){
        boolean check = false;

        User user = userRepository.findByEmail(email);
        if(user != null){
            check = true;
        }

        return  check;



    }
}
