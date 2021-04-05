require 'will_paginate/array'

class StudiosController < ApplicationController
  before_action :set_studio, only: [:show]

  def index
    @studios = Studio.all
    @sorted = Studio.all.sort_by { |h | h[:hourly_rate] }
    @paginated_studios = @studios.paginate(page: params[:page])
    @sorted_studios = @sorted.paginate(:page => params[:page], :per_page => 3)
    render json: {
      paginated_studios: @paginated_studios,
      sorted_studios: @sorted_studios,
      page: @paginated_studios.current_page,
      page_count: @paginated_studios.total_pages,
    }
  end

  def show
    render json: @studio, serializer: StudioShowSerializer
  end

  private

  def set_studio
    @studio = Studio.find_by_id(params[:id])
  end
end
