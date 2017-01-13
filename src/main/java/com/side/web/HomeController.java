package com.side.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.side.service.HomeService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Controller
public class HomeController{

	@Autowired
	private HomeService homeService;

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home(){
		return "index";
	}

	@RequestMapping(value="/soccer/bpl/seasons", method=RequestMethod.GET)
	public ResponseEntity<Map<String,Object>> getBplSeasons(){
		Map<String,Object> response = new HashMap<String,Object>();

		List<Integer> seasons = new ArrayList<Integer>();

		for (int i = 2016; i > 2000; i--){
			seasons.add(i);
		}

		response.put("seasons", seasons);

		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);
	}

	@RequestMapping(value="/soccer/bpl/table", method=RequestMethod.GET)
	public ResponseEntity<Map<String,Object>> getBplTable(
			@RequestParam(value = "season", required=true) Integer season){
		Map<String,Object> response = new HashMap<String,Object>();

		response.put("table", homeService.getBplTable(season));

		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);
	}

	@RequestMapping(value="/images/bing-gallery",method=RequestMethod.GET)
	public ResponseEntity<Map<String,Object>> getBingImages(){
		Map<String,Object> response = new HashMap<String,Object>();

		response.put("images",homeService.getBingImages());

		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);
	}

}
