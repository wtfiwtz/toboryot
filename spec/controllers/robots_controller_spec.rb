require 'rails_helper'

RSpec.describe RobotsController do
  let(:table) { Table.create(session: 123) }
  let(:robot) { table.create_robot!(x: 1, y: 2, f: :west)}

  context '#index' do
    it 'should render no robot if it is not yet placed' do
      get :index, params: { table_id: table.session }
      expect(response).to have_http_status(:ok)
      response_body = JSON.parse(response.body)
      expect(response_body['robot']).to be_nil
    end

    it 'should render a valid robot' do
      robot
      get :index, params: { table_id: table.session }
      expect(response).to have_http_status(:ok)
      response_body = JSON.parse(response.body)
      expect(response_body['robot']).to eq(robot.attributes)
    end
  end

  context '#create' do
    it "should create a robot if one doesn't exist yet" do
      post :create, params: { table_id: table.session, x: 0, y: 4, f: 'north' }
      expect(response).to have_http_status(:ok)
      response_body = JSON.parse(response.body)
      created = assigns(:robot)
      expect(response_body['robot']).to eq(created.attributes)
      expect(created.x).to eq 0
      expect(created.y).to eq 4
      expect(created.f).to eq 'north'
    end

    it "should NOT create a robot if one already exists" do
      robot
      post :create, params: { table_id: table.session, x: 0, y: 4, f: 'north' }
      expect(response).to have_http_status(:bad_request)
      response_body = JSON.parse(response.body)
      expect(response_body['error']).to eq('Robot already placed')
    end
  end
end