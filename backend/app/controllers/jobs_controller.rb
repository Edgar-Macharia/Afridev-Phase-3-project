class JobsController < ApplicationController

    get "/jobs" do
       posts = Post.where(archive: false)
       posts.to_json(include: :user)
    end
end