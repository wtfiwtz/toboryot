# README

Steps followed
--------------

```
gem install rails
rails _5.0.2_ new toboryot
cd toboryot
bundle update
rm -R test/
git init
ga <files>
gc -m "Initial commit"
gco -b develop
```

```
bundle update
gc -m "Rubocop"
```

```
rails g rspec:install
gc -m "Rspec"
```

```
cd ..
rails _5.1.0.beta1_ new toboryot --yarn
cd toboryot
brew install yarn
yarn add webpack
bundle update
gc -m "Install Yarn"
```

```
yarn add react react-dom es6lint redux lodash
yarn add babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 
yarn add css-loader postcss-loader react-hot-loader@3.0.0-beta.6 style-loader webpack webpack-dev-server
yarn add classnames
gc -m "Install React"
```

```

```