package com.example.musicshop;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class OrderActivity extends AppCompatActivity {

    String[] addresses = {"krwkink@gmail.com"};
    String subject = "Order from shop";
    String emailText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_order);

        setTitle("Your Order");

        Intent receivedOrderIntent = getIntent();
        String username = receivedOrderIntent.getStringExtra("username");
        String goodsName = receivedOrderIntent.getStringExtra("goodsName");
        int quantity = receivedOrderIntent.getIntExtra("quantity", 0);
        double price = receivedOrderIntent.getIntExtra("price", 0);
        double orderPrice = receivedOrderIntent.getDoubleExtra("orderPrice", 0);
        emailText = "Имя заказчика: " + username + "\n" +
                "Товары в корзине:" + goodsName + "\n" +
                "Количество товара: " + quantity + "\n" +
                "Цена заказа: " +orderPrice;
        TextView orderTextView = findViewById(R.id.orderTextView);
        orderTextView.setText(emailText);
    }

    public void submitOrder(View view) {
        Intent intent = new Intent(Intent.ACTION_SENDTO);
        intent.setData(Uri.parse("mailto:"));
        intent.putExtra(Intent.EXTRA_EMAIL, addresses);
        intent.putExtra(Intent.EXTRA_SUBJECT, subject);
        intent.putExtra(Intent.EXTRA_TEXT, emailText);
        if(intent.resolveActivity(getPackageManager()) !=null){
            startActivity(intent);
        }
    }
}