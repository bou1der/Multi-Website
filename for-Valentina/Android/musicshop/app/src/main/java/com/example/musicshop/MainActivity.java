package com.example.musicshop;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.HashMap;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    int quantity = 0;
    Spinner spinner;
    ArrayList spinnerArrayList;
    ArrayAdapter spinnerAdapter;
    HashMap goodsMap;
    String goodsName;
    double price;
    EditText usernameEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        usernameEditText = findViewById(R.id.editTextText);

        createSpinner();
        createMap();
    }

    void createSpinner(){
        spinner = findViewById(R.id.spinner);
        spinner.setOnItemSelectedListener(this);
        spinnerArrayList = new ArrayList();

        spinnerArrayList.add("guitar");
        spinnerArrayList.add("piano");
        spinnerArrayList.add("micro");

        spinnerAdapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item, spinnerArrayList);
        spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(spinnerAdapter);
    }

    void createMap(){
        goodsMap = new HashMap();
        goodsMap.put("guitar", 300.0);
        goodsMap.put("piano", 100.0);
        goodsMap.put("micro", 150.0);
    }


    public void increaseQuantity(View view) {
        quantity+=1;
        TextView quantityTextView = findViewById(R.id.quantityTextViewId);
        quantityTextView.setText("" + quantity);
        TextView priceTextView = findViewById(R.id.priceTextView);
        priceTextView.setText("" + quantity * price);
    }

    public void decreaseQuantity(View view) {
        quantity-=1;
        if (quantity < 0) {
            quantity = 0;
        }
        TextView quantityTextView = findViewById(R.id.quantityTextViewId);
        quantityTextView.setText("" + quantity);
        TextView priceTextView = findViewById(R.id.priceTextView);
        priceTextView.setText("" + quantity * price);
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        goodsName = spinner.getSelectedItem().toString();
        price = (double)goodsMap.get(goodsName);
        TextView priceTextView = findViewById(R.id.priceTextView);
        priceTextView.setText("" + quantity * price);

        ImageView goodsImageView = findViewById(R.id.goodsImageView);

        switch (goodsName) {
            case "guitar":
                goodsImageView.setImageResource(R.drawable.guitar);
                break;
            case "piano":
                goodsImageView.setImageResource(R.drawable.piano);
                break;
            case "micro":
                goodsImageView.setImageResource(R.drawable.micro);
                break;
            default:
                goodsImageView.setImageResource(R.drawable.guitar);
                break;

        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }

    public void addToCart(View view) {
        Order order = new Order();

        order.username = usernameEditText.getText().toString();

        // Log.d("username", order.username);

        order.goodsName = goodsName;
        // Log.d("goodsName", order.goodsName);

        order.quantity = quantity;
        // Log.d("quantity", "" + order.quantity);

        order.price = price;

        order.orderPrice = quantity * price;
        // Log.d("orderPrice", "" + order.orderPrice);

        Intent orderIntern = new Intent(MainActivity.this, OrderActivity.class);

        orderIntern.putExtra("username", order.username);
        orderIntern.putExtra("goodsName", order.goodsName);
        orderIntern.putExtra("quantity", order.quantity);
        orderIntern.putExtra("price", order.price);
        orderIntern.putExtra("orderPrice", order.orderPrice);

        startActivity(orderIntern);
    }
}