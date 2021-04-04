class StudiosController < ApplicationController
    before_action :set_studio, only: [:show]

    def index
        @studios = Studio.all
        render json: @studios
    end

    def show
        render json: @studio, serializer: StudioShowSerializer
    end

    private

    def set_studio
        @studio = Studio.find_by_id(params[:id])
    end
end
