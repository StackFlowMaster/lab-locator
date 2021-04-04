class StudiosController < ApplicationController
  before_action :set_studio, only: [:show]

  def index
    @studios = Studio.all
    @sorted = Studio.all.sort
    @paginated_studios = @studios.paginate(page: params[:page])
    render json: {
      studios: @studios,
      sorted: @sorted,
      paginated_studios: @paginated_studios,
      page: @paginated_studios.current_page,
      page_count: @paginated_studios.total_pages
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
