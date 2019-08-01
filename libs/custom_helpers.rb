module Custom_helpers

  # def get_current_page()
  #   return current_page.url
  # end

  def set_parameter(url,utm)
      conjunction = url.include?("?") ? "&" : "?"
      return url + conjunction + utm
  end

end