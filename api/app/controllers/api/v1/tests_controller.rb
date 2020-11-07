module Api
  module V1
    class TestsController < ApplicationController
      def index
        render json: { status: 'SUCCESS', message: 'tekton tests' }
      end
    end
  end
end
