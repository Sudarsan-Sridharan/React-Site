package com.side.dto;

import java.io.Serializable;

public class ImageDTO implements Serializable {

	private static final long serialVersionUID = 3371173314898790315L;
	
	private String url;
	private String copyright;
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getCopyright() {
		return copyright;
	}
	public void setCopyright(String copyright) {
		this.copyright = copyright;
	}
}