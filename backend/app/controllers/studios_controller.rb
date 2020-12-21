class StudiosController < ApplicationController
    before_action :set_studio, only: [:show]

    def index
        render json: Studio.all
    end

    def show
        render json: @studio, serializer: StudioShowSerializer
    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def set_studio
        @studio = Studio.find_by_id(params[:id])
    end

    def studio_params

    end
end
