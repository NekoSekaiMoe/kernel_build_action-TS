# SPDX-License-Identifier: Apache--2.0
# This file is part of source code.
#
# Copyright (c) 2023 dabao1955
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
NODE_MODULES = ./node_modules

ifeq ("$(wildcard $(NODE_MODULES))","")
  INSTALL = pnpm i
endif

BUILD = ncc build

.PHONY: all
all: lint format build clean

push: package.json /usr/bin/git .git
	git config pull.rebase false
	git pull
	git add .
	git commit -as
	git push

install-dep:
	$(INSTALL)

build:
	$(INSTALL)
	$(BUILD) src/post/index.ts
	mv dist/index.js dist/post.js
	$(BUILD) src/index.ts

f: .git
	$(MAKE) fetch -C $(abspath .)
c:
	$(MAKE) clean -C $(abspath .)

lint:
	eslint --fix src/**/*.ts
format:
	prettier --write .
fetch: package.json
	git pull

.PHONY: clean
clean: package.json /usr/share/node_modules/yarn/bin/yarn dist/
	rm -rf dist
