package com.nnh.be.dto.sdi.cart;

import lombok.Data;

@Data
public class CreateCartSdi {
    private Integer quantity;
    private String sizeCode;
    private Long userId;
    private Long shoeId;
}
