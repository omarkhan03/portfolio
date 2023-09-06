cmake_minimum_required (VERSION 3.5.1)
project (cpp_examples CXX C)
set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/cmake/Modules/")

# Use modern C++
SET(CMAKE_CXX_STANDARD 20)
SET(CMAKE_CXX_STANDARD_REQUIRED ON)
SET(CMAKE_CXX_EXTENSIONS OFF)

include_directories("${PROJECT_BINARY_DIR}" libs src)

# Add your source files here
file(GLOB sources src/*.c src/*.h src/*.cpp src/*.hpp)

# Create the executable
add_executable(cpp_examples ${sources})

# Link libraries
#target_link_libraries(cpp_examples #any lib here)
