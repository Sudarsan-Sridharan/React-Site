package com.side.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.jaunt.Element;
import com.jaunt.Elements;
import com.jaunt.JauntException;
import com.jaunt.UserAgent;
import com.side.dto.ImageDTO;
import com.side.dto.TeamSeasonDTO;

@Component
public class HomeService{
	
	public List<TeamSeasonDTO> getBplTable(Integer season){
		List<TeamSeasonDTO> result = new ArrayList<TeamSeasonDTO>();
		UserAgent userAgent = new UserAgent();
		try{
			userAgent.visit("http://www.espnfc.us/english-premier-league/23/table?season=" + season.toString());
			
			Elements teamLinks = userAgent.doc.findEvery("<td class=team>").findEvery("<a>");
			List<Element> teamList = teamLinks.toList();
			Elements statsLinks = userAgent.doc.findEvery("<td class=groupA>");
			List<Element> statsList = statsLinks.toList();
			Elements gdLinks = userAgent.doc.findEvery("<td class=gd>");
			List<Element> gdList = gdLinks.toList();
			Elements ptsLinks = userAgent.doc.findEvery("<td class=pts>");
			
			List<Element> ptsList = ptsLinks.toList();
			for(int i = 0; i < teamList.size(); i++){
				TeamSeasonDTO tsdto = new TeamSeasonDTO();
				tsdto.setTeam(teamList.get(i).innerText());
				tsdto.setGoalDiff(Integer.parseInt(gdList.get(i).innerText()));
				tsdto.setPoints(Integer.parseInt(ptsList.get(i).innerText()));
				
				int j = (i*6);
				tsdto.setGamesPlayed(Integer.parseInt(statsList.get(j).innerText()));
				tsdto.setWins(Integer.parseInt(statsList.get(j+1).innerText()));
				tsdto.setDraws(Integer.parseInt(statsList.get(j+2).innerText()));
				tsdto.setLosses(Integer.parseInt(statsList.get(j+3).innerText()));
				tsdto.setGoalsFor(Integer.parseInt(statsList.get(j+4).innerText()));
				tsdto.setGoalsAgainst(Integer.parseInt(statsList.get(j+5).innerText()));
				
				result.add(tsdto);
			}
		} catch(JauntException e){
			
		}
		return result;
	}
	
	public List<ImageDTO> getBingImages(){
		List<ImageDTO> result = new ArrayList<ImageDTO>();

		RestTemplate restTemplate = new RestTemplate();		
		String stringURL = "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=en-US";
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(stringURL);
		
		HttpEntity<?> entity = new HttpEntity<>(headers);
		HttpEntity<String> response = restTemplate.exchange(builder.build().encode().toUri(),HttpMethod.GET,entity,String.class);
		
		if (response.hasBody()){
			String json = response.getBody();
			Gson gson = new Gson();
			Type mapType = new TypeToken<Map<String,Object>>() {}.getType();
			Map<String,Object> jsonMap = gson.fromJson(json, mapType);
			if (jsonMap.containsKey("images")){
//				String imageListJson = gson.toJson(jsonMap.get("images"));
//				Type listType = new TypeToken<List<Map<String,Object>>>() {}.getType();
//				List<Map<String,Object>> l = gson.fromJson(imageListJson, listType);
				List<Map<String,Object>> l = (List<Map<String,Object>>)jsonMap.get("images");
				for (Map<String,Object> m: l){
					ImageDTO idto = new ImageDTO();
					idto.setUrl((String)m.get("url"));
					idto.setCopyright((String)m.get("copyright"));
					result.add(idto);
				}
			}
		}
		return result;
	}
	
}