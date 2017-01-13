package com.side.dto;

import java.io.Serializable;

public class TeamSeasonDTO implements Serializable {
	
	private static final long serialVersionUID = -7705688853236309120L;
	
	private String team;
	private Integer gamesPlayed;
	private Integer wins;
	private Integer draws;
	private Integer losses;
	private Integer goalsFor;
	private Integer goalsAgainst;
	private Integer goalDiff;
	private Integer points;
	
	
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public Integer getGamesPlayed() {
		return gamesPlayed;
	}
	public void setGamesPlayed(Integer gamesPlayed) {
		this.gamesPlayed = gamesPlayed;
	}
	public Integer getWins() {
		return wins;
	}
	public void setWins(Integer wins) {
		this.wins = wins;
	}
	public Integer getDraws() {
		return draws;
	}
	public void setDraws(Integer draws) {
		this.draws = draws;
	}
	public Integer getLosses() {
		return losses;
	}
	public void setLosses(Integer losses) {
		this.losses = losses;
	}
	public Integer getGoalsFor() {
		return goalsFor;
	}
	public void setGoalsFor(Integer goalsFor) {
		this.goalsFor = goalsFor;
	}
	public Integer getGoalsAgainst() {
		return goalsAgainst;
	}
	public void setGoalsAgainst(Integer goalsAgainst) {
		this.goalsAgainst = goalsAgainst;
	}
	public Integer getGoalDiff() {
		return goalDiff;
	}
	public void setGoalDiff(Integer goalDiff) {
		this.goalDiff = goalDiff;
	}
	public Integer getPoints() {
		return points;
	}
	public void setPoints(Integer points) {
		this.points = points;
	}
	
}